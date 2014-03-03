/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package org.anglee.hello.module;

import com.google.inject.AbstractModule;

/**
 *
 */
public class FirstModule extends AbstractModule {

  @Override
  protected void configure() {
    //bind(Ai.class).to(A.class);
    bind(Ai.class).to(AAA.class);
    bind(Bi.class).to(B.class);
  }
}
