export default class TipsService {
  constructor($log) {
    'ngInject';

    this.$log = $log;
  }


  hello() {
    console.log('This is the tips component!');
  }

  // Retrieves All the Tips for a particular topic from our PHP backend
  getAllTips(topic){
    console.log('This is the tips component!');
  }

  // retrieves tips created by the currently logged in user
  getUserTips(login){

  }



}
