<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Contact extends CI_Controller {

	public function __construct() {
	    parent::__construct();
	    $this->load->helper('form');
	    $this->load->helper('captcha');
	}

	public function index()	{
			$data['pgTitle'] = "Home";
			$data['metaD'] = "Meta description missing.";
			$data['bodyclass'] = "contact";
			$data['formstart'] = form_open('send/form', array('id' => 'theform', 'class' => 'row'));
					$data['name'] = form_input(array(
											'name' => 'name',
											'type' => 'text',
											'placeholder' => 'Your Name'
					));
					$data['email'] = form_input(array(
											'name' => 'email',
											'type' => 'text',
											'placeholder' => 'Your Email'
					));
					$data['company'] = form_input(array(
											'name' => 'company',
											'type' => 'text',
											'placeholder' => 'Your Company'
					));
					$data['interest'] = form_input(array(
											'name' => 'interest',
											'type' => 'text',
											'placeholder' => 'Area of Interest'
					));
					$data['description'] = form_textarea(array(
											'name' => 'description',
											'type' => 'text',
											'placeholder' => 'Description'
					));
			$this->load->view('template/head', $data);
			$this->load->view('template/mobilenav');
			$this->load->view('template/desktopnav');
			$this->load->view('contact');
			$this->load->view('template/close');
	}

}