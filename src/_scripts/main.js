// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import { Link } from '../_modules/link/link';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('你好呀👋！冰都幻想乡 技术小组招新咯!');
  console.log('mail to: i@touhou.tv');
});
