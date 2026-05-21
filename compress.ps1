Add-Type -AssemblyName System.Drawing
$source = "D:\daud\projek bisnis\Klinik Ivy Skin Treatment\src\assets\banner.png"
$dest = "D:\daud\projek bisnis\Klinik Ivy Skin Treatment\public\banner.jpg"

$img = [System.Drawing.Image]::FromFile($source)
$bmp = New-Object System.Drawing.Bitmap($img)

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]50)

$bmp.Save($dest, $codec, $encoderParams)
$bmp.Dispose()
$img.Dispose()

Write-Output "Size: $((Get-Item $dest).Length) bytes"
