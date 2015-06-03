var inicio = function()
{
	var muestrahome = function()
	{
		$("#idperfil").hide("slow");	
		$("#idperfil2").hide("slow");
		$("#idhtml").hide("slow");
		$("#idcss").hide("slow");
		$("#idjs").hide("slow");
		$("#idphp").hide("slow");
		$("#idhome").show("slow");	

	}
	var muestraperfil = function()
	{
		$("#idhome").hide("slow");
		$("#idhtml").hide("slow");
		$("#idcss").hide("slow");
		$("#idperfil").show("slow");
		$("#idjs").hide("slow");
		$("#idphp").hide("slow");		
		$("#idperfil2").show("slow");
	}
	var muestrahtml = function()
	{
		$("#idhome").hide("slow");
		$("#idperfil").hide("slow");		
		$("#idperfil2").hide("slow");
		$("#idcss").hide("slow");
		$("#idjs").hide("slow");
		$("#idphp").hide("slow");
		$("#idhtml").show("slow");
	}
	var muestracss = function()
	{
		$("#idhome").hide("slow");
		$("#idperfil").hide("slow");		
		$("#idperfil2").hide("slow");
		$("#idhtml").hide("slow");
		$("#idjs").hide("slow");
		$("#idphp").hide("slow");
		$("#idcss").show("slow");
	}
	var	muestrajs = function()
	{
		$("#idhome").hide("slow");
		$("#idperfil").hide("slow");		
		$("#idperfil2").hide("slow");
		$("#idhtml").hide("slow");
		$("#idcss").hide("slow");
		$("#idphp").hide("slow");
		$("#idjs").show("slow");		
	}
	var muestraphp = function()
	{
		$("#idhome").hide("slow");
		$("#idperfil").hide("slow");		
		$("#idperfil2").hide("slow");
		$("#idhtml").hide("slow");
		$("#idcss").hide("slow");
		$("#idjs").hide("slow");
		$("#idphp").show("slow");		
	}
	var contador = 1;
	var muestramenu = function()
	{
		if(contador == 1 )
		{
			$("#nav1").show("slow");
			contador=0;
		}
		else
		{
			$("#nav1").hide("slow");
			contador=1;
		}
	}
	$("#btn_home").on("click",muestrahome);
	$("#btn_perfil").on("click",muestraperfil);
	$("#btn_menu").on("click",muestramenu);
	$("#btn_html").on("click",muestrahtml);
	$("#btn_css").on("click",muestracss);
	$("#btn_js").on("click",muestrajs);
	$("#btn_php").on("click",muestraphp);
}
$(document).on("ready",inicio);


