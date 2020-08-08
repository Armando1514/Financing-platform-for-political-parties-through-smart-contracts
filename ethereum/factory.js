import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3482F2AEb2a911304CaF24CDad762EeDEa8E973c'
);

export default instance;
