<?php
include 'TipService.class.php';
include 'AccountService.class.php';
include 'UserRatingService.class.php';

if ($_SERVER['REQUEST_METHOD'] == "GET") {
    if ($_GET['fileName'] == 'TipService.class.php') {
        $tipService = new TipService();

        if ($_GET['function'] == 'getAllTipsForLanguage') {
            $result = $tipService -> getAllTipsForLanguage($_GET['language']);
            echo $result;

        } else if ($_GET['function'] == 'createTip') {
            $tipService -> createTip($_GET['accountID'], $_GET['languageID'], $_GET['description']);

        } else if ($_GET['function'] == 'upvoteTip') {
            $tipService -> upvoteTip($_GET['tipsID']);

        } else if ($_GET['function'] == 'downvoteTip') {
            $tipService -> downvoteTip($_GET['tipsID']);

        } else {
            echo '{"error": "Oops there seems to be a problem"}';
        }
    } else {
        echo '{"error": "Oops there seems to be a problem"}';
    }
}
?>