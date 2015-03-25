    <script src="<?php echo base_url(); ?>js/foundation.min.js"></script>

	<script src="<?php echo base_url(); ?>js/jquery.lettering.js"></script>
	<script src="<?php echo base_url(); ?>js/skrollr.js"></script>
	<?php
		if(isset($specialScripts)){
			if(is_array($specialScripts)){
				foreach($specialScripts as $item){
					echo '<script src="' . base_url() . $item . '"></script>';
				}
			}else{
				echo '<script src="' . base_url() . $specialScripts . '"></script>';
			}
		}
	?>

	<script>
		// var s = skrollr.init({
		// 	render: function(data){
		// 		console.log(data.curTop);
		// 	},
		// 	 easing: {
	 //        //This easing will sure drive you crazy
	 //        wtf: Math.random,
	 //        inverted: function(p) {
	 //            return 1 - p;
	 //        }
	 //    }
		// });
	</script>

    <script>
      $(document).foundation();
    </script>
</body>
</html>