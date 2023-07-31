<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .card {
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
        background-color: #f9f9f9;
    }
</style>
<body>
    <div id="cards">
        <?php
        $pastaDocumentos = 'documentos/';
        $arquivos = scandir($pastaDocumentos);

        foreach ($arquivos as $arquivo) {
            if (pathinfo($arquivo, PATHINFO_EXTENSION) === 'txt') {
                $conteudo = file_get_contents($pastaDocumentos . $arquivo);
                echo '<div class="card">';
                echo '<h2>' . $arquivo . '</h2>';
                echo '<pre>' . $conteudo . '</pre>';
                echo '</div>';
            }
        }
        ?>
    </div>

<script src="js/documentReader.js" defer></script>
</body>
</html>