<section id="projwrapper">
	<div class="builtwiththese">

	</div>
	<div class="row">
	<?php foreach($record as $item): ?>
		<div class="small-10 small-centered medium-uncentered medium-6 large-6 columns">
			<p><?php echo $item->projects_design; ?></p>
		</div>
		<div id="projectimage" class="small-10 small-centered medium-uncentered medium-6 large-6 columns">
			<img src="<?php echo base_url(); ?>images/<?php echo $item->projects_comp; ?>" alt="<?php echo $item->projects_title; ?>">
			<?php if(isset($item->projects_link)) {
				echo "<p class=\"livelink\"><a href=\"" . $item->projects_link . "\">View the live site.</a></p>";
			} ?>
		</div>
	</div>
	<div class="row">
		<div id="devblurb" class="small-10 small-centered large-12 columns">
			<?php echo $item->projects_dev; ?>
		</div>
	<?php endforeach; ?>
	</div>
</section>