<?php
require_once("Dbh.class.php");

class Planning extends Dbh {

    public function getReservation (){

        if(isset($_GET['week'])) { 
            $week = $_GET['week'];
            if($week>0) {
                $req = $this->connect()->prepare("SELECT debut, fin, titre, login, reservations.id FROM reservations
                INNER JOIN utilisateurs ON reservations.id_utilisateur = utilisateurs.id WHERE WEEK(debut)=WEEK(NOW() + INTERVAL $week WEEK)");
                $req->execute();

                $res = $req->fetchAll(PDO::FETCH_ASSOC);

                return $res;
            }
            if($week<0) {
                $newweek = substr($week,1);
                $req = $this->connect()->prepare("SELECT debut, fin, titre, login, reservations.id FROM reservations
                INNER JOIN utilisateurs ON reservations.id_utilisateur = utilisateurs.id WHERE WEEK(debut)=WEEK(NOW() - INTERVAL $newweek WEEK)");
                $req->execute();

                $res = $req->fetchAll(PDO::FETCH_ASSOC);

                return $res;
            }
            elseif($week==0) {
                $req = $this->connect()->prepare("SELECT debut, fin, titre, login, reservations.id FROM reservations
                INNER JOIN utilisateurs ON reservations.id_utilisateur = utilisateurs.id WHERE WEEK(debut)=WEEK(NOW())");
                $req->execute();

                $res = $req->fetchAll(PDO::FETCH_ASSOC);

                return $res;
            }  
        }
        else {
            $req = $this->connect()->prepare("SELECT debut, fin, titre, login, reservations.id FROM reservations
            INNER JOIN utilisateurs ON reservations.id_utilisateur = utilisateurs.id WHERE WEEK(debut)=WEEK(NOW())");
            $req->execute();

            $res = $req->fetchAll(PDO::FETCH_ASSOC);

            return $res;
        }
    }
}
?>