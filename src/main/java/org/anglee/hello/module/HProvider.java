package org.anglee.hello.module;

import com.google.inject.Inject;
import com.google.inject.Provider;

/**
 *
 */
public class HProvider implements Provider<Hi> {

  @Override
  public Hi get() {
    Hi h = new H();
    h.setPostfix("Howdy");
    return h;
  }
}
