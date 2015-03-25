<?php

class Projects_model extends CI_Model {
	
	public function __construct(){
		parent::__construct();
	}

	public function getProject($num){
		$project = $this->db->get_where('tbl_projects', array('projects_id' => $num));
		return $project->result();
	}

	// public function getBuiltWith($num){
	// 	$this->db->select('builtwith_tool');
	// 	$this->db->from('tbl_builtwith');
	// 	$this->db->join('tbl_projects', 'tbl_projects.projects_id = tbl_l_projects_builtwith.projects_id');
	// 	$this->db->where('projects_id', $num);

	// 	$builtwith = $this->db->get();
	// 	return $builtwith->result();
	// }

	// public function getProject($num){
	// 	$this->db->select('tbl_projects.*, tbl_builtwith.builtwith_tool');
	// 	$this->db->from('tbl_projects, tbl_builtwith, tbl_l_projects_builtwith');
	// 	$this->db->where('tbl_projects.projects_id', 'tbl_l_projects_builtwith.projects_id');
	// 	$this->db->where('tbl_l_projects_builtwith.projects_id', 'tbl_projects.projects_id');
	// 	$this->db->where('tbl_builtwith.builtwith_id', 'tbl_l_projects_builtwith.builtwith_id');
	// 	$this->db->where('tbl_l_projects_builtwith.builtwith_id', 'tbl_builtwith.builtwith_id');
	// 	$this->db->where('tbl_projects.projects_id', $num);

	// 	$project = $this->db->get();
	// 	return $project->result();
	// }


	public function getAll(){
		$project = $this->db->get('tbl_projects');
		return $project->result();
	}
	
}