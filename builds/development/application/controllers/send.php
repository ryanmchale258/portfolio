<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Send extends CI_Controller {

	public function __construct() {
	    parent::__construct();
	    $this->load->library('email');
	    $this->load->model('projects_model');
	}

	public function form()	{
		$this->email->from($this->input->post('email'), $this->input->post('name'));
		$this->email->to('ryan.mchale258@gmail.com'); 

		$this->email->subject($this->input->post('interest'));
		$this->email->message($this->input->post('interest'), $this->input->post('description'));	

		$this->email->send();

		redirect('send/thankyou');
	}

	public function thankyou() {
		$data['pgTitle'] = "Home";
		$data['metaD'] = "Meta description missing.";
		$data['bodyclass'] = "thanks";
	
		$this->load->view('template/head', $data);
		$this->load->view('template/mobilenav');
		$this->load->view('template/desktopnav');
		$this->load->view('thankyou');
		$this->load->view('template/close');
	}

}