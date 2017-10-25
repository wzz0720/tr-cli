const expect = require('chai').expect;

import {Tool} from '../src/utils/Tool'

const numberFormat = Tool.NumberFormat;

describe('验证数字格式化', function() {
    it('保留两位小数点', function() {
      expect(numberFormat(2.111111, 2)).to.be.equal(2.11);
    });
    it('取整数',function(){
      expect(numberFormat(2.111111, 0)).to.be.equal(2);
    });
    it('默认保留三位小数',function(){
      expect(numberFormat(2.111111)).to.be.equal(2.111);
    });
    it('输入字母返回0',function(){
      expect(numberFormat('aaaa')).to.be.equal(0);
    });
    it('输入非数字返回NaN',function(){
      expect(isNaN(numberFormat('321313dssda是的',3))).to.be.equal(true);
    });
  });