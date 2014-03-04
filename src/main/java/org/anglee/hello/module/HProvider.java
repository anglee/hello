/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package org.anglee.hello.module;

import com.google.inject.Inject;
import com.google.inject.Provider;

/**
 *
 * @author alee
 */
public class HProvider implements Provider<Hi> {

  @Inject
  HProvider() {

  }

  @Override
  public Hi get() {
    Hi h = new H();
    h.setPostfix("Howdy");
    return h;
  }
}
