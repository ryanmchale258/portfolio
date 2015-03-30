<section id="hero">
	<div class="constrain">
		<h1><?php echo $record->projects_title; ?></h1>
		<p><?php echo $record->projects_headline; ?></p>
		<div class="projectshot-mob">
			<img src="<?php echo base_url() ?>images/portfolio/small-<?php echo $record->projects_shortname; ?>.png" alt="<?php echo $record->projects_title; ?>">
		</div>
	</div>
</section>
<div class="projecttable">
	<div class="projectshot-dsk">
		<img src="<?php echo base_url() ?>images/portfolio/big-<?php echo $record->projects_shortname; ?>.png" alt="<?php echo $record->projects_title; ?>">
	</div>
</div>