<?php
require_once '../DataLayer/TipData.class.php';
require_once '../Models/Tip.class.php';

/**
 * Class: TipService
 * Date: 4/7/2018
 * Description:
 */
class TipService {

    /**
     * @var TipData
     */
    private $dataClass;

    /**
     * TipService constructor.
     */
    public function __construct() {
        $this -> dataClass = new TipData();
    }

    /**
     * @param $accountID
     * @param $language
     * @param $description
     * @return string|resource
     */
    public function createTip($accountID, $language, $description) {
        $accountID = filter_var($accountID, FILTER_SANITIZE_NUMBER_INT);
        $language = filter_var($language, FILTER_SANITIZE_STRING);
        $description = filter_var($description, FILTER_SANITIZE_STRING);

        $this -> getDataClass() -> createTip($accountID, $language, $description);
    }

    /**
     * @return TipData
     */
    public function getDataClass() {
        return $this -> dataClass;
    }

    /**
     * @param $language
     * @return string|resource
     */
    public function getAllTipsForLanguage($language) {
        $allTips = $this -> getDataClass() -> getAllTipsForLanguage($language);
        $allTipObjects = array();
        foreach ($allTips as $tip) {
            $tipObject = new Tip($tip['tipsid'], $tip['accountid'], stripslashes($tip['languageid']), stripslashes($tip['description']), $tip['rating']);
            array_push($allTipObjects, $tipObject);
        }
        $allTipObjectsAsJSON = json_encode($allTipObjects);
        return $allTipObjectsAsJSON;
    }

    /**
     * @param $tipID
     * @return string|resource
     */
    public function upvoteTip($tipsID) {
        $tipsID = filter_var($tipsID, FILTER_SANITIZE_NUMBER_INT);
        $this -> getDataClass() -> upvoteTip($tipsID);
    }

    /**
     * @param $tipID
     * @return string
     */
    public function downvoteTip($tipsID) {
        $tipsID = filter_var($tipsID, FILTER_SANITIZE_NUMBER_INT);
        $this -> getDataClass() -> downvoteTip($tipsID);
    }
}
