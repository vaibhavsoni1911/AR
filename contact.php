<?php
	if($_POST)
	{
    $to_email       = "jassirohit02@gmail.com"; //Recipient email, Replace with own email here
    // $from_email     = 'noreply@your_domain.com'; //from mail, it is mandatory with some hosts and without it mail might endup in spam.
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
      print "Can't access directly!";
      exit;
    }

    //Sanitize input data using PHP filter_var().
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["contact_no"];
		$subject = $_POST["subject"];
    $message = $_POST["message"];

		$ip=$_SERVER['REMOTE_ADDR'];
		if(!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
		{
			$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
		}
		if(!empty($_SERVER['HTTP_CLIENT_IP']))
		{
			$ip=$_SERVER['HTTP_CLIENT_IP'];
		}


		/*-------Client Header----------------*/
			$client_headers  = "From: $name < $email >\n";
		    $client_headers .= 'X-Mailer: PHP/' . phpversion();
		    $client_headers .= "MIME-Version: 1.0\r\n";
		    $client_headers .= "Content-Type: text/html; charset=iso-8859-1\n";


		/*----------User Header-----------*/

			$user_header  = "From: AR International Group < jassirohit02@gmail.com >\n";
		    $user_header .= 'X-Mailer: PHP/' . phpversion();
		    $user_header .= "MIME-Version: 1.0\r\n";
		    $user_header .= "Content-Type: text/html; charset=iso-8859-1\n";



		$logo_path="http://designgola.com/assets/img/logo.png";
		$client_msg='<table cellpadding="15px" style="border:3px solid #ff0033;padding:15px;">
		<tr><td colspan="2" align="center"><a href="" target="_blank"><img src="'.$logo_path.'" width="150" alt="" style="width:150px"></a></td></tr>
		<tr><td style="background:#f8f8f8;color:#333;border:1px solid #333" background="#f8f8f8" align="left">Name:</td><td align="left" style="border:1px solid #333;" >'.$name.'</td></tr>
		<tr><td style="background:#f8f8f8;color:#333;border:1px solid #333" background="#f8f8f8" align="left">Email:</td><td align="left" style="border:1px solid #333;">'.$email.'</td></tr>
		<tr><td style="background:#f8f8f8;color:#333;border:1px solid #333" background="#f8f8f8" align="left">Phone:</td><td align="left" style="border:1px solid #333;">'.$phone.'</td></tr>
		<tr><td style="background:#f8f8f8;color:#333;border:1px solid #333" background="#f8f8f8" align="left">Phone:</td><td align="left" style="border:1px solid #333;">'.$subject.'</td></tr>
		<tr><td style="background:#f8f8f8;color:#333;border:1px solid #333" background="#f8f8f8" align="left">Message:</td><td align="left" style="border:1px solid #333;">'.$message.'</td></tr>
		<tr><td style="background:#f8f8f8;color:#333;border:1px solid #333" background="#f8f8f8" align="left">Visitor IP:</td><td align="left" style="border:1px solid #333;">'.$ip.'</td></tr>
		</table>';




		$user_msg='<table cellpadding="15px" style="border:3px solid #ff0033;padding:15px;"><tr><td colspan="5" align="center"><a href="" target="_blank"><img src="'.$logo_path.'" width="150" alt="" style="width:150px"></a></td></tr>
		<tr><td>Dear '.$name.',</td></tr>
		<tr><td>Thank you for Contacting Us. We will Get Back to you shortly.</td></tr>
		<tr><td align="right">Regards <br> AR International Group</td></tr>
		</table>';


		$client_mail=@mail($to_email,'Contact Inquiry | AR International Group', $client_msg, $client_headers);
		$user_mail= @mail($email,'Thank you | AR International Group', $user_msg, $user_header);

    if($client_mail && $user_mail){
        //If mail couldn't be sent, this is probably server's fault, check your mail configuration or consult your host
				echo '<div class="alert alert-success">Thank you We have received your Data. we will get Back to you Shortly</div>';
				exit;
    }else{

				echo '<div class="alert alert-danger">Sorry..!! Cannot send E-mail, Please try again.</div>';
        exit;
    }
}
?>
