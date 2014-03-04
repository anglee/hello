package org.anglee.hello.module;

import com.google.inject.Provider;
import com.google.inject.Singleton;

/**
 *
 */
@Singleton
public class HProvider implements Provider<Hi> {
  private String _postfix;

  public void setPostfix(String postfix) {
    _postfix = postfix;
  }

  @Override
  public Hi get() {
    Hi h = new H(_postfix);
    return h;
  }
}
