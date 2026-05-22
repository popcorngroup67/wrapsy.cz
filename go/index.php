<?php
$slug = trim($_SERVER['REQUEST_URI'], '/');
$links = json_decode(file_get_contents(__DIR__ . '/links.json'), true);

if (isset($links[$slug])) {
    header('Location: ' . $links[$slug], true, 302);
    exit;
}

header('Location: https://wrapsy.cz', true, 302);
exit;