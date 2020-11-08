import { IDeal } from "../interfaces/Deal";

export const Create = (deal: IDeal): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <pedido>
     <cliente>
     <nome>${deal.name}</nome>
     <tipoPessoa>J</tipoPessoa>
     <endereco>Rua Visconde de São Gabriel</endereco>
     <cpf_cnpj>00000000000000</cpf_cnpj>
     <ie>3067663000</ie>
     <numero>392</numero>
     <complemento>Sala 54</complemento>
     <bairro>Cidade Alta</bairro>
     <cep>95.700-000</cep>
     <cidade>Bento Gonçalves</cidade>
     <uf>RS</uf>
     <fone>5481153376</fone>
     <email>teste@teste.com.br</email>
     </cliente>
     <transporte>
     <transportadora>Transportadora XYZ</transportadora>
     <tipo_frete>R</tipo_frete>
     <servico_correios>SEDEX - CONTRATO</servico_correios>
     <dados_etiqueta>
     <nome>${deal.name}</nome>
     <endereco>Rua Visconde de São Gabriel</endereco>
     <numero>392</numero>
     <complemento>Sala 59</complemento>
     <municipio>Bento Gonçalves</municipio>
     <uf>RS</uf>
     <cep>95.700-000</cep>
     <bairro>Cidade Alta</bairro>
     </dados_etiqueta>
     <volumes>
     <volume>
     <servico>SEDEX - CONTRATO</servico>
     <codigoRastreamento></codigoRastreamento>
     </volume>
     <volume>
     <servico>PAC - CONTRATO</servico>
     <codigoRastreamento></codigoRastreamento>
     </volume>
     </volumes>
     </transporte>
     <itens>
     <item>
     <codigo>001</codigo>
     <descricao>Um acordo</descricao>
     <un>Pç</un>
     <qtde>10</qtde>
     <vlr_unit>1.68</vlr_unit>
     </item>
     </itens>
     <parcelas>
     <parcela>
     <data>${deal.add_time}</data>
     <vlr>${deal.value}</vlr>
     <obs>Status: ${deal.status}</obs>
     </parcela>
     </parcelas>
     <vlr_frete>15</vlr_frete>
     <vlr_desconto>10</vlr_desconto>
     <obs>Status: ${deal.status}</obs>
     <obs_internas>Status: ${deal.status}</obs_internas>
    </pedido>`;
};
