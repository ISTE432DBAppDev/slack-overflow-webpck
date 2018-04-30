<?php
/**
 * Class: UserRatingData
 * Date: 4/4/2018
 * Description:
 */

class UserRatingData {

    /**
     * @param $accountID
     * @param $tipID
     * @return null|resource
     */
    public function createUserRating($accountID, $tipsID) {
        try {
            $dbconn = $this -> getDBInfo();
            $statement = $dbconn -> prepare("INSERT INTO USERRATINGS (accountID, tipsID) VALUES (:accountID, :tipsID)");

            $statement -> bindValue(':accountID', $accountID);
            $statement -> bindValue(':tipsID', $tipsID);
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
     * @param $accountID
     * @param $tipsID
     * @return bool|null
     */
    public function checkUserRating($accountID, $tipsID) {
        try {
            $dbconn = $this -> getDBInfo();
            $statement = $dbconn -> prepare("SELECT * FROM USERRATINGS WHERE accountID = ? AND tipsID = ?");
            $statement -> execute(array($accountID, $tipsID));
            $result = $statement -> fetchAll();

            $numRows = count($result);
            echo $numRows;
            if ($numRows == 1) {
                return '{"status": "Rating For Tip Found"}';
            } else {
                return '{"status": "No Rating Found"}';
            }
        } catch (Exception $e) {
            echo $e;
            return null;
        }
    }
}
