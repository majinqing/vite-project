param(
  [Parameter(Mandatory = $true)]
  [string]$PythonExe,

  [Parameter(Mandatory = $true)]
  [string]$ScriptPath,

  [string]$FallbackHookEventName = "",

  [string]$FallbackAdditionalContext = ""
)

$ErrorActionPreference = "Stop"
$stdinData = [Console]::In.ReadToEnd()

try {
  if (-not (Test-Path -LiteralPath $PythonExe)) {
    throw "Python executable not found: $PythonExe"
  }

  if (-not (Test-Path -LiteralPath $ScriptPath)) {
    throw "Hook script not found: $ScriptPath"
  }

  $output = $stdinData | & $PythonExe $ScriptPath 2>$null
  $exitCode = $LASTEXITCODE

  if ($exitCode -eq 0) {
    if ($null -ne $output) {
      $output | Write-Output
    }
    exit 0
  }
}
catch {
}

if ($FallbackHookEventName) {
  $payload = @{
    hookSpecificOutput = @{
      hookEventName = $FallbackHookEventName
      additionalContext = $FallbackAdditionalContext
    }
  }
  $payload | ConvertTo-Json -Compress -Depth 6
}

exit 0
