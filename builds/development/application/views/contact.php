<section id="contactwrapper">
	<div class="row">
		<div id="contactform" class="small-10 medium-8 large-12 small-centered columns">
			<h2>Want to get in touch?</h2>
			<p>Let's get in touch. Let's have a dialogue. We can be honest about our feelings. Right now, I'm feeling a strong desire to be hired. Coincidentally, right now, you are feeling a strong desire to hire me. And that's okay. That's good. And healthy. See how easy this is? Now, just breathe. Breathe deeply, and fill out the form below. It's pretty easy. Just five fields. Barely a form at all. And before you know it, I will be working for you. And I will be good. And all of our desires will be met. You know what that's called? That's called synergy.</p>
			<p>I think this is going to be pretty great.</p>
		</div>
	</div>
			<?php echo $formstart; ?>
				<div class="small-centered small-10 medium-8 large-6 large-uncentered columns">
					<label>Name *:</label>
					<?php echo $name; ?>

					<label>Email *:</label>
					<?php echo $email; ?>

					<label>Company:</label>
					<?php echo $company; ?>

					<label>Area of interest *:</label>
					<?php echo $interest; ?>
				</div>
				<div class="small-centered small-10 medium-8 large-6 large-uncentered columns">
					<label>A brief description of the opportunity:</label>
					<?php echo $description; ?>
					<input id="formsubmit" type="submit" value="submit"></input>
				</div>
			</form>
</section>