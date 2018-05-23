<template>
    <div class="nav">
      <ul>
	    	<router-link to="/home" tag="li" active-class="active">
	    		<a href="javascript:;">首页</a>
	    	</router-link>
	    	<router-link to="/follow" tag="li" active-class="active">
	    		<a href="javascript:;">关注</a>
	    	</router-link>
	    	<router-link to="/column" tag="li" active-class="active">
	    		<a href="javascript:;">栏目</a>
	    	</router-link>
            
		    <!-- <li>
              <router-link  active-class="active" to='/home'>首页</router-link>
			</li>
            <li>
              <router-link active-class="active"  to='/follow'>关注</router-link>
			</li>
			<li>
              <router-link active-class="active" to='/column'>栏目</router-link>
			</li> -->

	    </ul>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>

	
</style>
