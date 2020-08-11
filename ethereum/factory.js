import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8c91F8c409d468ec95d97627212447aBa4e034f4'
);

export default instance;
