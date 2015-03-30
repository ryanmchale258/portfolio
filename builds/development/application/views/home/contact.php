<div id="contact" class="contact layout">
	<section class="innerwrap">
		<div class="innercontent">
			
			<h2>Drop me a line</h2>
			<p>I'd love to hear from you. Whether you'd just like to comment on some of my portfolio pieces, or if you're interested in working together, drop me a line! I'm always eager to take on a new project or even just to chat. I'm currently accepting freelance work and actively pursuing fulltime employment at an agency in London.</p>

			<?php echo $formstart; ?>
					<label><span>Name *:</span>
						<?php echo $name; ?>
					</label>

					<label><span>Email *:</span>
						<?php echo $email; ?>
					</label>

					<label><span>Company:</span>
						<?php echo $company; ?>
					</label>

					<label><span>Area of interest *:</span>
						<?php echo $interest; ?>
					</label>

					<label><span>Message:</span>
						<?php echo $description; ?>
					</label>

					<input id="formsubmit" type="submit" value="submit"></input>
			</form>

		</div>
	</section>
</div>