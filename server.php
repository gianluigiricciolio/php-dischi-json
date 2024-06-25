<?

// LEGGO DAL FILE JSON
$string = file_get_contents('./dischi.json');
// DECODIFICO IL FILE JSON IN UN ARRAY ASSOCIATIVO PHP
$buffer = json_decode($string, true);
// INDICO AL CLIENT CHE FILE ASPETTARSI
header('Content-type: application/json');
// STAMPO SU FILE LA VERSIONE CODIFICATA DEL FILE ELABORATO IN PHP
echo json_encode($buffer);
