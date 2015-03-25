<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Comingsoon extends CI_Controller {

	public function __construct() {
	    parent::__construct();

	}

	public function index() {
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Ryan McHale is a web designer and developer in London Ontario currently accepting work.";
		$data['bodyclass'] = "home";
		$data['specialScripts'] = "js/comingsoon.js";

		$this->load->view('template/head', $data);
		$this->load->view('comingsoon');
		$this->load->view('template/close');
	}
}