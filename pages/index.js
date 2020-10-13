import React from 'react';
import Prismic from 'prismic-javascript';

const Index = ({ data }) => {
  console.log("client");
  return (
  <div 
    style={{ 
        backgroundColor: data.corfundo,
        color: data.cortexto
      }}
    >
      <h1>SocialLinks (Central de Links)</h1>
      <img src={data.logo.url}/>
      <ul>
        {data.body.map(item => {
          if (item.slice_type === 'secao'){
            return <h2>{item.primary.nome}</h2>;
          }
          if (item.slice_type === 'link'){
          return (
            <li>
              <a href={item.primary.destino.url}>{item.primary.texto_do_botao}</a>
            </li>
          );
          }
          if (item.slice_type === 'image'){
            return <img src={item.primary.imageperfil.url} alt={item.primary.imageperfil.alt}/>;
          }
          
          return null;
        })}
      </ul>
      <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
  );
};

export async function getServerSideProps() {
  console.log("server");
  const client = Prismic.client('https://rafaelteixeira.cdn.prismic.io/api/v2');
  const centralLinks = await client.getSingle("centrallinks");
  console.log(centralLinks);
  return { props: {
    data: centralLinks.data,
  } };
}

export default Index;