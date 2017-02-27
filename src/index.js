/**
 * Format Console(fonsole)
 ----------------------------
 * @method log:
 * label<String>,
 * style<String> and,
 * message<String>(Optional)
 ----------------------------
 */

const fonsole = {
  log: (label, style = '', message = '') => {
    // Check for newline characters
      const newline0 = label.startsWith('\n') ? '\n' : '';
      const newline1 = label.endsWith('\n') ? '\n' : '';

      // Allow formatting only on client-side
      if (typeof window !== 'undefined') {
        console.log( // eslint-disable-line
          `${newline0}%c${label.trim()}%c${newline1}${message}`,
          `${style}`,
          ``);
      } else {
        console.log(label, message); // eslint-disable-line
      }
    }
}

export default fonsole;
