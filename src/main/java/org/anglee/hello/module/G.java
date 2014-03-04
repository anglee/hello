package org.anglee.hello.module;

import com.google.inject.Inject;
import com.google.inject.name.Named;

/**
 *
 */
public class G {
  private final String _prefix;
  private final String _postfix;
  private G(String prefix, String postfix) {
    _prefix = prefix;
    _postfix = postfix;
  }

  public String getInfo() {
    return _prefix + " - G - " + _postfix;
  }

  public static class Factory {
    private String _pre;

    @Inject
    public Factory(@Named("G's prefix") String pre) {
      _pre = pre;
    }

    public G make(String post) {
      return new G(_pre, post);
    }
  }
}
