 deliveryApp.controller('myDeliveryTracker', function($scope) {
    $scope.userName = "Soumya Mohanty";
	$scope.checkvalue=false;
	$scope.Deliveryobject={
	   taskName:"",
	   taskId:"",
	   taskNamedetals:"",
	   taskdeldate:"",
	   blocker:"",
	   ontimedelivery:"",
	   QualityDelivery:"",
	   issuesdetails:{
		   issue:'',
		   impact:'',
		   havedone:'',
		   helpneed:'',
		   dateval:'',
		   timeval:''
	   }
	} ;
	$scope.issuedetail={
	      dateval:'',
	      timeval:'',
	      issue:'',
	      impact:'',
	      havedone:'',
	      helpneed:''
	};
	$scope.checkedradiovalue='';
	$scope.blockercolor='#ffffff';
	$scope.ontimecolor='#ffffff';
	$scope.deliverycolor='#ffffff';
	$scope.submitdisabled=true;
	$scope.justification=false;
	$scope.Ides='';
	$scope.button1=true;
	$scope.button2=false;
	$scope.tabledatarepeat=[
	{
		checkedval:false,
	   taskName:"UI Manage",
	   taskId:"1",
	   taskDetails:"UI Manage",
	   taskdeldate:"04/06/2016",
	     blocker:"",
	   ontimedelivery:"",
	   QualityDelivery:""
	  
	} ,
	{
		checkedval:false,
	   taskName:"Angular Manage",
	   taskId:"2",
	   taskDetails:"Angular Manage",
	   taskdeldate:"04/06/2016",
	     blocker:"",
	   ontimedelivery:"",
	   QualityDelivery:""
	   
	},
	{
		checkedval:false,
	   taskName:"DB Manage",
	   taskId:"3",
	   taskDetails:"DB Manage",
	   taskdeldate:"04/06/2016",
	     blocker:"",
	   ontimedelivery:"",
	   QualityDelivery:""
	  
	}];
	$scope.sample = [{

		key: 'Yes',

		value: 'Yes'

		}, {

		key: 'No',

		value: 'No'

		}, {

		key: 'Maybe',

		value: 'Maybe'

		},
		{

		key: 'NA',

		value: 'NA'

	 }];

$scope.blockerchange=function(blocker,id){
	 $scope.Deliveryobject.blocker=blocker;
	 //alert(id+""+blocker);
	   if($scope.Ides==id){
	
	if($scope.Deliveryobject.blocker == "Yes"){
		$scope.blockercolor='red';
	}else if($scope.Deliveryobject.blocker == "No"){
		$scope.blockercolor='green';
	}else if($scope.Deliveryobject.blocker == "Maybe"){
		$scope.blockercolor='drak-grey';
	}else if($scope.Deliveryobject.blocker == "NA"){
		$scope.blockercolor='light-grey';
	}else 
    {
            $scope.blockercolor='white';
    }
	$scope.enabledsubmit($scope.Deliveryobject.blocker,id);
	$scope.displayjustification(id);
	   }
	    else{
		  $scope.blockercolor='white'; 
	    }
};
$scope.ontimedelivery=function(ontime,id){
	$scope.Deliveryobject.ontimedelivery=ontime;
	//alert(blocker);
	   if($scope.Ides==id){
	if($scope.Deliveryobject.ontimedelivery == "Yes"){
		$scope.ontimecolor='green';
	}else if($scope.Deliveryobject.ontimedelivery == "No"){
		$scope.ontimecolor='red';
	}else if($scope.Deliveryobject.ontimedelivery == "Maybe"){
		$scope.ontimecolor='drak-grey';
	}else if($scope.Deliveryobject.ontimedelivery == "NA"){
		$scope.ontimecolor='light-grey';
	}else 
    {
            $scope.blockercolor='white';
    }
	$scope.enabledsubmit($scope.Deliveryobject.ontimedelivery,id);
	$scope.displayjustification(id);
	   }
	    else{
		  $scope.blockercolor='white'; 
	   }
};
$scope.onqualitydelivery=function(delivery,id){
	//alert(blocker);
	$scope.Deliveryobject.QualityDelivery=delivery;
	 if($scope.Ides==id){
	if(delivery == "Yes"){
		$scope.deliverycolor='green';
	}else if(delivery == "No"){
		$scope.deliverycolor='red';
	}else if(delivery == "Maybe"){
		$scope.deliverycolor='drak-grey';
	}else if(delivery == "NA"){
		$scope.deliverycolor='light-grey';
	}else 
    {
            $scope.blockercolor='white';
    }
	$scope.enabledsubmit(delivery,id);
	$scope.displayjustification(id);
	 } else{
		  $scope.blockercolor='white'; 
	   }
};
$scope.enabledsubmit = function(dropvalue,ids)
{
	if($scope.Ides==ids){
	if(($scope.Deliveryobject.blocker == "NA" && $scope.Deliveryobject.ontimedelivery == "NA" && $scope.Deliveryobject.QualityDelivery == "NA")||
	    ($scope.Deliveryobject.blocker == "No" && $scope.Deliveryobject.ontimedelivery == "Yes" && $scope.Deliveryobject.QualityDelivery == "Yes")){
		
		$scope.submitdisabled=false;
		
	}else{
		$scope.submitdisabled=true;
		
	}
	}else{
		$scope.submitdisabled=true;
	}
  };
 $scope.displayjustification = function(idval){
	   if($scope.Ides==idval){
	if(($scope.Deliveryobject.blocker == "Yes" || $scope.Deliveryobject.blocker == "Maybe") || 
	($scope.Deliveryobject.ontimedelivery == "No" || $scope.Deliveryobject.ontimedelivery == "Maybe") || 
	($scope.Deliveryobject.QualityDelivery == "No" || $scope.Deliveryobject.QualityDelivery == "Maybe")){
		$scope.justification=true;
		$scope.button1=false;
	    $scope.button2=true;
	}else{
		$scope.justification=false;
		$scope.button1=true;
	    $scope.button2=false;
	}
	}else{
		$scope.justification=false;
		$scope.button1=true;
	    $scope.button2=false;
	}
  };
  $scope.selectcheckbox = function(id){
	  $scope.Ides=id;
	  $scope.justification=false;
	   $scope.Deliveryobject.blocker="";
	   $scope.Deliveryobject.ontimedelivery="";
	   $scope.Deliveryobject.QualityDelivery="";
  };
  $scope.Submitdata=function(issuedetaildata){
	  var arraydata=$scope.tabledatarepeat;
	  angular.forEach(arraydata, function(value, key){
	  if(value.taskId==$scope.Ides){
		   $scope.Deliveryobject.taskName=value.taskName;
		   $scope.Deliveryobject.taskId=value.taskId;
		   $scope.Deliveryobject.taskNamedetals=value.taskDetails;
	       $scope.Deliveryobject.taskdeldate=value.taskdeldate;
	  }
      });
	     //if(issuedetaildata.length!=0){
	     $scope.Deliveryobject.issuesdetails=issuedetaildata;
		 //}
	  console.log("data"+JSON.stringify($scope.Deliveryobject));
  };
     
//Soumya
     
     $scope.isActive = true;
});