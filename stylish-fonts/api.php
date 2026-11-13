<?php
// api.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Since it's an API
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Get the POST data
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

$text = isset($input['text']) ? $input['text'] : '';
if (empty($text)) {
    $text = "Style"; // Default
}

// Load fonts mapping
$fontDataPath = __DIR__ . '/fonts.json';
if (!file_exists($fontDataPath)) {
    echo json_encode(["error" => "Font data not found"]);
    http_response_code(500);
    exit;
}

$fontData = json_decode(file_get_contents($fontDataPath), true);
$categoryData = $fontData['categoryData'];
$maps = $fontData['maps'];

if (!function_exists('mb_str_split')) {
    function mb_str_split($string) {
        return preg_split('/(?<!^)(?!$)/u', $string );
    }
}

// Conversion function mirroring the JS logic
function convertText($text, $style, $maps) {
    if (!$text) {
        return "Style";
    }
    
    $res = $text;

    // 1. Map Characters
    if (isset($style['map']) && isset($maps[$style['map']])) {
        $chars = mb_str_split($res);
        $mapped = [];
        foreach ($chars as $c) {
            $mapped[] = isset($maps[$style['map']][$c]) ? $maps[$style['map']][$c] : $c;
        }
        $res = implode('', $mapped);
    }

    // 2. Decorators & Patterns
    if (isset($style['join'])) {
        $chars = mb_str_split($text);
        return implode($style['join'], $chars);
    }
    
    if (isset($style['pat'])) {
        if ($style['pat'] === "S t y l e") {
            $chars = mb_str_split($text);
            return implode(' ', $chars);
        }
        if ($style['pat'] === "STtTyTlTe") {
             $chars = mb_str_split($text);
             return implode('T', $chars);
        }

        $res = str_replace("[TEXT]", $res, $style['pat']);
    }
    
    return $res;
}

// Process all categories
$output = [];
foreach ($categoryData as $cat) {
    $outCat = [
        'id' => $cat['id'],
        'name' => $cat['name'],
        'icon' => $cat['icon'],
        'results' => []
    ];
    
    foreach ($cat['styles'] as $style) {
        $outCat['results'][] = convertText($text, $style, $maps);
    }
    
    $output[] = $outCat;
}

echo json_encode(["success" => true, "data" => $output], JSON_UNESCAPED_UNICODE);
?>
