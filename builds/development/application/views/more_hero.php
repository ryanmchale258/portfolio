<section id="hero" class="project">
	<div id="logoArea" class="project">		
		<?php foreach($record as $row): ?>
		<h1><?php echo $row->projects_title; ?></h1>
		<img id="projectlogo" class="mobile" src="<?php echo base_url(); ?>images/<?php echo $row->projects_icon; ?>" />
		<div id="projectheadline"><?php echo $row->projects_headline; ?></div>
		<?php endforeach; ?>
	</div>
</section>