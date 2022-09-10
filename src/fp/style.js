import style from 'styled-components';

const Container = style.div`
	margin:15px;
	>
	.headingContainer{
		font-weight:bold;
		margin-top:10px;
		display:flex;		
	}
	
	.headingContainer .title{
		width:150px;
	}
	.headingContainer .stats{
		font-weight:normal;
	}
	.headingContainer .stats.up{
		font-weight:bold;
		color:green;
	}
`;

export {
    Container
}