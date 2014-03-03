package org.anglee.hello.module;

import java.util.Date;

/**
 *
 */
public interface AFactory {
  A create(String postfix);
  A create(Date postfix);
}
