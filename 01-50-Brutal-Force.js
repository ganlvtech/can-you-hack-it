/**
 * Brutal Force
 *
 * Brute force programming challenge. Brute force the PIN.
 *
 * Submit the correct PIN to proceed (3 - 4 digits long).
 *
 * Console message:
 *
 * To submit a pin here, use the BrutalForce_submit(pin) function
 */

function solveBrutalForce() {
  for (let i = 100; i < 10000; i++) {
    BrutalForce_submit(i);
  }
}

solveBrutalForce();
