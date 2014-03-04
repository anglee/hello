package org.anglee.hello.module;

import com.google.inject.Inject;
import com.google.inject.Provider;

/**
 *
 */
public class J {
  Provider<Hi> _hProvider;

  @Inject
  J(Provider<Hi> hProvider) {
    _hProvider = hProvider;
  }

  public String getInfo() {
    Hi h = _hProvider.get();
    return "J - " + h.getInfo();
  }
}
