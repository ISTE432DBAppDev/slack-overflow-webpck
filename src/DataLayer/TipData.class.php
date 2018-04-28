<?php
/**
 * Class: TipData
 * Date: 4/4/2018
 * Description:
 */

class TipData {
    /**
     * @param $accountID
     * @param $languageID
     * @param $description
     * @return null|resource
     */
    public function createTip($accountID, $languageID, $description) {
        try {
            $dbconn = $this -> getDBInfo();
            $statement = $dbconn -> prepare("INSERT INTO TIPS (accountid, languageid, description, rating) VALUES (:accountID, :languageID, :description, 0)");

            $statement -> bindValue(':accountID', $accountID);
            $statement -> bindValue(':languageID', $languageID);
            $statement -> bindValue(':description', $description);

            $statement -> execute();
        } catch (Exception $e) {
            echo $e;
            return null;
        }
    }

    /**
     * @return null|PDO
     */
    private function getDBInfo() {
        try {
            $instance = DatabaseConnection ::getInstance();
            return $conn = $instance -> getConnection();
        } catch (Exception $e) {
            echo $e -> getMessage();
            return null;
        }
    }

    /**
     * @param $languageID
     * @return array|null|resource
     */
    public function getAllTipsForLanguage($languageID) {
        try {
            $dbconn = $this -> getDBInfo();
            $statement = $dbconn -> prepare("SELECT * FROM tips WHERE languageID = ?");
            $statement -> execute(array($languageID));
            $result = $statement -> fetchAll();
            return $result;
        } catch (Exception $e) {
            echo $e;
            return null;
        }
    }

    /**
     * @param $tipsID
     * @return null|resource
     */
    public function upvoteTip($tipsID) {
        try {
            $dbconn = $this -> getDBInfo();
            $statement = $dbconn -> prepare("UPDATE TIPS SET rating = rating + 1 WHERE tipsID = :tipsID");

            $statement -> bindValue(':tipsID', $tipsID);

            $statement -> execute();
            echo "true";
        } catch (Exception $e) {
            echo $e;
            return null;
        }
    }

    /**
     * @param $tipsID
     * @return null
     */
    public function downvoteTip($tipsID) {
        try {
            $dbconn = $this -> getDBInfo();
            $statement = $dbconn -> prepare("UPDATE TIPS SET rating = rating - 1 WHERE tipsid = :tipsID");

            $statement -> bindValue(':tipsID', $tipsID);

            $statement -> execute();
            echo "true";
        } catch (Exception $e) {
            echo $e;
            return null;
        }
    }
}
