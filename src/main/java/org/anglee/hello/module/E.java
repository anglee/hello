/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package org.anglee.hello.module;

/**
 *
 * @author alee
 */
public class E implements Ei {
  String _postfix;
  public E(String postfix) {
    _postfix = postfix;
  }

  @Override
  public String getInfo() {
    return "E - " + _postfix;
  }  
}
