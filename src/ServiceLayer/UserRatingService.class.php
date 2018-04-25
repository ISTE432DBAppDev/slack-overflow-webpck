<?php
require_once '../DataLayer/UserRatingData.class.php';
require_once '../Models/UserRating.class.php';

/**
 * Class: UserRatingService
 * Date: 4/7/2018
 * Description:
 */
class UserRatingService {

    /**
     * @var UserRatingData
     */
    private $dataClass;

    /**
     * UserRatingService constructor.
     */
    public function __construct() {
        $this -> dataClass = new UserRatingData();
    }

    /**
     * @return UserRatingData
     */
    public function getDataClass() {
        return $this -> dataClass;
    }

    /**
     * @param $accountID
     * @param $tipID
     * @return string|resource
     */
    public function createUserRating($accountID, $tipsID) {
        $accountID = filter_var($accountID, FILTER_SANITIZE_NUMBER_INT);
        $tipsID = filter_var($tipsID, FILTER_SANITIZE_NUMBER_INT);

        $dataClass = new UserRatingData();
        $dataClass -> createUserRating($accountID, $tipsID);
    }

    /**
     * @param $accountID
     * @param $tipID
     * @return bool|null|resource
     */
    public function checkUserRating($accountID, $tipsID) {
        $accountID = filter_var($accountID, FILTER_SANITIZE_NUMBER_INT);
        $tipsID = filter_var($tipsID, FILTER_SANITIZE_NUMBER_INT);

        $dataClass = new UserRatingData();
        $ratingExist = $dataClass -> checkUserRating($accountID, $tipsID);
        return $ratingExist;
    }


}
