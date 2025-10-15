$SourceDirectories = @(
    "./packages/openlayers/src"
)

$FilePatterns = @("*.ts", "*.tsx")
$ExactExclusions = @("index.ts", "index.tsx")
$WildcardExclusion = "*.d.ts"

$ProjectRoot = Get-Location

$EntryPoints = Get-ChildItem -Path $SourceDirectories -Include $FilePatterns -Recurse -File |
    Where-Object { 
        ($_.Name -notin $ExactExclusions) -and ($_.Name -notlike $WildcardExclusion)
    } |
    ForEach-Object {
        $relativePath = $_.FullName.Replace($ProjectRoot.Path + "\", "./").Replace("\", "/")
        return $relativePath
    }

$JsonOutput = $EntryPoints | ConvertTo-Json -Compress

Write-Host "--- TypeDoc Entry Points JSON Array (Copy and Paste) ---"
Write-Host $JsonOutput
Write-Host "---------------------------------------------------------"

Write-Host "Found $($EntryPoints.Count) entry points."
