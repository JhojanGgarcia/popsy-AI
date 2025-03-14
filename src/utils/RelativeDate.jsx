/**
 * Formatea una fecha en relación al día actual
 * @param {string|number|Date} timestamp - Timestamp o fecha a formatear
 * @param {Object} options - Opciones de configuración
 * @param {string} options.locale - Localización para formateo (default: 'es')
 * @param {boolean} options.includeTime - Si se debe incluir la hora (default: true)
 * @returns {string} Fecha formateada
 */
function FormatRelativeDate(timestamp, options = {}) {
    // Valores por defecto de opciones
    const { 
      locale = 'es', 
      includeTime = true 
    } = options;
    
    // Manejo de casos nulos o indefinidos
    if (!timestamp) return "No date";
  
    // Convertir a objetos Date
    const date = timestamp instanceof Date ? new Date(timestamp) : new Date(timestamp);
    const now = new Date();
    
    // Validar fecha
    if (isNaN(date.getTime())) return "Invalid date";
    
    // Clonar fechas y establecer a medianoche para comparar solo días
    const dateAtMidnight = new Date(date);
    dateAtMidnight.setHours(0, 0, 0, 0);
    
    const nowAtMidnight = new Date(now);
    nowAtMidnight.setHours(0, 0, 0, 0);
    
    // Calcular diferencia en días
    const diffTime = nowAtMidnight - dateAtMidnight;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Obtener el texto relativo basado en la diferencia de días
    const relativeText = getRelativeTextForDays(diffDays, locale);
    
    // Formatear la hora si se solicita
    let formattedTime = '';
    if (includeTime) {
      formattedTime = ` - ${formatTime(date, locale)}`;
    }
    
    // Si la diferencia es mayor que nuestro rango de textos predefinidos, mostrar fecha completa
    if (!relativeText) {
      return `${formatDate(date, locale)}${formattedTime}`;
    }
    
    return `${relativeText}${formattedTime}`;
  }
  
  /**
   * Obtiene el texto relativo para un número de días
   * @param {number} days - Número de días de diferencia
   * @param {string} locale - Localización
   * @returns {string|null} Texto relativo o null si fuera de rango
   */
  function getRelativeTextForDays(days, locale) {
    if (days < 0) return null; // Fechas futuras
    
    const labels = {
      'es': {
        0: "Hoy",
        1: "Ayer",
        2: "Anteayer",
        3: "Hace 3 días",
        4: "Hace 4 días",
        5: "Hace 5 días",
        6: "Hace 6 días",
        7: "Hace una semana"
      },
      'en': {
        0: "Today",
        1: "Yesterday",
        2: "2 days ago",
        3: "3 days ago",
        4: "4 days ago",
        5: "5 days ago",
        6: "6 days ago",
        7: "A week ago"
      }
    };
    
    // Usar localización por defecto si la proporcionada no existe
    const localeLabels = labels[locale] || labels['es'];
    
    // Devolver el texto si está dentro del rango, null en caso contrario
    return days <= 7 ? localeLabels[days] : 
           days <= 14 ? `Hace ${days} días` : 
           days <= 30 ? `Hace ${Math.floor(days / 7)} semanas` : null;
  }
  
  /**
   * Formatea la hora en formato corto
   * @param {Date} date - Fecha a formatear
   * @param {string} locale - Localización
   * @returns {string} Hora formateada
   */
  function formatTime(date, locale) {
    return date.toLocaleTimeString(locale, { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }
  
  /**
   * Formatea la fecha completa según localización
   * @param {Date} date - Fecha a formatear
   * @param {string} locale - Localización
   * @returns {string} Fecha formateada
   */
  function formatDate(date, locale) {
    return date.toLocaleDateString(locale);
  }
  
  export { FormatRelativeDate };