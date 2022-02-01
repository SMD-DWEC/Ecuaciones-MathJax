<?php

require_once "../librerias/PhpSpreadsheet-1.21.0/src/PhpSpreadsheet/Spreadsheet.php";

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Ods;

$reader = new PhpSpreadsheet();
$spreadsheet = $reader->load("../datos/tarta.ods");