<?php

    try{

        $conn = new PDO('mysql:host=localhost;dbname=alunoDB', 'root', ''); 
    }catch(PDOExceprion $e){
         $e->getMessage();
    }