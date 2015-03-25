<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct() {
	    parent::__construct();
	    $this->load->helper('form');
	    $this->load->helper('captcha');
	    $this->load->model('projects_model');
	}

	public function index()	{
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Meta description missing.";
		$data['bodyclass'] = "home";
		$data['specialScripts'] = array('js/main.js', 'js/home.js', 'js/work.js');
		$data['dAtts'] = 'data-top="box-shadow: 0px 0px 0px #333; "data--100-top="box-shadow: 0px 3px 10px #333;" data-anchor-target="#hero"';
		$data['mAtts'] = 'data-top="box-shadow: 0px 0px 0px #333;" data--50-top="box-shadow: 2px 3px 10px #333;" data-anchor-target="#hero"';
		$data['allprojects'] = $this->projects_model->getAll();

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
		$this->load->view('home_hero');
		$this->load->view('work');
		$this->load->view('contact');
		$this->load->view('template/close');
	}

}