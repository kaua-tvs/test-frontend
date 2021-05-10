<!-- # Graphic decidi usar uma api service de casos de covid, como é service achei legal usar ela (por não achar um service mais interessante).
# Table-Custom, fiz um "CRUD" simples com dados de funcionario, é um "CRUD" simples, porém faz o que foi pedido no requesito.


 -->

#1
SELECT 
	ts.dsStatus , COUNt(tp.idProcesso) as qtde_processo
FROM 
	tb_Processo tp
INNER JOIN
	tb_Status ts ON tp.idStatus = ts.idStatus 
GROUP BY ts.dsStatus ;

#-------------------------------------------------------

#2
SELECT 
	MAX(ta.dtAndamento) as maior_data_andamento ,
	tp.nroProcesso 
FROM 
	tb_Processo tp 
INNER JOIN
	tb_Andamento ta ON ta.idProcesso = tp.idProcesso 
INNER JOIN 
	tb_Status ts on tp.idStatus  = ts.idStatus 
WHERE 
	tp.idStatus = 3
AND 
	YEAR(tp.DtEncerramento) = 2013
GROUP BY tp.nroProcesso;

#----------------------------------------------------------------------

#3
SELECT 
	tp.DtEncerramento , COUNT(tp.idProcesso) as qtde_data_encerramento
FROM 
	tb_Processo tp
GROUP BY tp.DtEncerramento  
HAVING COUNT(tp.idProcesso) > 5;

#--------------------------------------------------------------------

#4
select 
	LPAD(nroProcesso, 12, '0') 
FROM 
	tb_Processo tp