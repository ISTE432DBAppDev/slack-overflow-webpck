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
            echo '{"error": "Please provide a valid function name"}';
        }


    } else if ($_GET['fileName'] == 'AccountService.class.php') {
        $accountService = new AccountService();
        if ($_GET['function'] == 'createAccount') {
            $accountService -> createAccount($_GET['userName'], $_GET['pwd']);

        } else if ($_GET['function'] == 'loginAccount') {
            $accountService -> loginAccount($_GET['userName'], $_GET['pwd']);

        } else {
            echo '{"error": "Please provide a valid function name"}';
        }


    } else if ($_GET['fileName'] == 'UserRatingService.class.php') {
        $userRatingService = new UserRatingService();
        if ($_GET['function'] == 'createUserRating') {
            $result = $userRatingService -> createUserRating($_GET['accountID'], $_GET['tipsID']);
            echo $result;

        } else if ($_GET['function'] == 'checkUserRating') {
            $result = $userRatingService -> checkUserRating($_GET['accountID'], $_GET['tipsID']);
            echo $result;

        } else {
            echo '{"error": "Please provide a valid function name"}';
        }


    }else {
        echo '{"error": "Please provide a valid fileName"}';
    }
}
?>