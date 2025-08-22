const { createApp } = Vue
const isValidInput = (char) => /\d/.test(char);
createApp({
  data() {
    return {
      showModal: false,
      activeIndex: null,
      creatorsForm: false,
      accordionItems: [
        { title: 'Qual pessoa pode participar desse programa?',
          content: 'Não! Apenas funcionários da L’oreal Grande Público.' },
        { title: 'As aulas e as atividades extras aconteceram fora do horário de trabalho?',
          content: 'Não, todo o conteúdo e qualquer ação necessária, será realizada dentro do horário habitual de trabalho.' },
        { title: 'Promotores contratados por agência podem participar?',
          content: 'Não. O programa é para quem já é contratado L’Oreal ' },
        { title: 'Como faço para me inscrever?',
          content: 'Faça sua inscrição de 20 a 28 de Agosto de 2025.' },
        { title: 'Quantas pessoas serão selecionadas?',
          content: 'Serão 30 selecionados nessa fase do programa. Boa sorte!' },
        { title: 'Quais serão os critérios de seleção?',
          content: 'Ter as redes sociais abertas (tik tok e instagram) e ser promotor DPGP' },
          { 
            title: 'Quais serão os benefícios de me tornar um/a Beauty Creator?',
            content: '1 - Participar do seleto grupo de 45 promotores influenciadores<br>2 - Ter 2 sábados do mês dedicados a produção de conteúdo.<br>3 - Receber ferramentas para produção de conteúdo (Ring Light + Microfone)<br>4 - Receber os produtos em casa<br>5 - Participar de gamificação com premiações durante a jornada<br>6 - Participar em eventos regionais das marcas<br>7 - Participar do projeto de maior visibilidade e impacto de Instore<br>8 - Aumentar sua rede de contatos e aprender com outros colaboradores de diversos lugares do país.<br>9 - Concorrer a possibilidade de ir para a Convenção L\'Oreal 2026.'
          }
      ],
      items: [
        {
          numbers: "assets/mask-boy.png",
          title: "Produtos",
          description: "Já pensou em aprender sobre criação de conteúdo com um super time da <strong>L'Oreal</strong> Grande Público? <br/> <br/> Nosso programa exclusivo é projetado para equipar você com as ferramentas e técnicas necessárias para se destacar no mundo digital e impulsionar resultados impactantes através de conteúdo envolvente.",
        },
      ],
      cards: [
        {
          numbers: "01",
          description: "Posicionamento estratégico e performance",
        },
        {
          numbers: "02",
          description: "Identidade visual <br> no conteúdo",
        },
        {
          numbers: "03",
          description: "Contando história <br> através  de ganchos",
        },
        {
          numbers: "04",
          description: "Técnicas de edição de vídeos, takes e cortes",
        },
        {
          numbers: "05",
          description: "Como identificar e metrificar seus resultados",
        },
      ],
      itemsWork: [
        {
          image: "assets/Group544.png",
          description: "<strong>Educação de Ponta:</strong> Já pensou em aprender com os melhores do mercado sem sair de casa? Participe das aulas e treinamentos virtuais com profissionais super renomados em influência e marketing de conteúdo. É a sua chance de receber dicas valiosas e técnicas diretamente dos especialistas!<br><br><strong>Crescimento Profissional: </strong> Quer bombar nas redes sociais e mostrar seu talento? Aprimore suas habilidades em contar histórias, criar conteúdos incríveis e conquistar seu público com estratégias de engajamento. Você vai aprender a se destacar no mundo digital!<br><br><strong>Reconhecimento:</strong> Se você é criativo e adora criar conteúdo, essa é a sua chance! Seja uma das 15 pessoas selecionadas para uma graduação especial e ainda concorra a prêmios incríveis por engajamento, criatividade e qualidade. Mostre seu potencial e receba o reconhecimento que você merece!"
        }
      ],
      itemsMiniCard: [
        { content: "<h3>Inscrição</h3> Programa Exclusivo para funcionários da L'Oreal Grande Público - comece fazendo sua <a data-bs-toggle='modal' data-bs-target='#exampleModal'><strong>inscrição</strong></a>." },
        { content: '<h3>Imersão</h3> De Setembro a Dezembro, mergulhe em uma série de atividades educativas, desde a estratégia de conteúdo até as técnicas de edição e iluminação.' },
        { content: '<h3>Desafios<br> de Criação</h3> Aplique o aprendizado em desafios práticos, criando conteúdos que serão avaliados por critérios de criatividade e engajamento.' },
        { content: '<h3>Black Friday</h3> Use suas novas habilidades para maximizar as vendas e o engajamento durante a Black Friday e prepare-se para uma avaliação final em dezembro.' },
      ],
      tutors: [
        {
          image: "assets/creators-2.jpg",
          name: "Laryssa Santos",
          url: "https://www.instagram.com/mulheresceo",
          perfil: "- @mulheresceo",
          aula: "Criação de conteúdo longo prazo",
          description: "Mulheres CEO é uma plataforma dedicada a apoiar e conectar mulheres em posições de liderança. Com uma comunidade vibrante e em crescimento, oferecemos recursos, networking e oportunidades de desenvolvimento para mulheres que estão moldando o futuro dos negócios. Nossa missão é empoderar líderes femininas, promovendo a diversidade e a inclusão no ambiente corporativo. Através de eventos, mentorias e conteúdos exclusivos, inspiramos e capacitamos mulheres a alcançar seus objetivos profissionais e pessoais."
        },
        {
          image: "assets/creators-1.jpg",
          name: "Bruno e Hellen",
          url: "https://www.instagram.com/midtrack.co",
          perfil: "- @midtrack.co",
          aula: "Edição",
          description: "A Midtrack produz conteúdo audiovisual e campanhas personalizadas há 10 anos, conectando marcas ao público com alta performance e identidade única. Com mais de 50 mil criadores e filmmakers, nossa comunidade cresce e aprende junta. Além de filmes e campanhas, oferecemos treinamentos para empresas e profissionais que querem explorar o futuro da criação de conteúdo."
        },
        {
          image: "assets/creators-3.jpg",
          name: "Leticia Imai",
          url: "https://www.instagram.com/leticia.imai",
          perfil: "- @leticia.imai",
          aula: "Inspiração e tendências",
          description: "Criadora de conteúdo e empreendedora digital. Inspira  uma comunidade com +125mil membros que querem desenvolver seus processos criativos, postar com frequência nas redes sociais e monetizar seus projetos autorais."
        },
        {
          image: "assets/tutores/Fernando.jpg",
          name: "Fernando Cavalcanti",
          url: "https://www.instagram.com/@fernandocavalcanti",
          perfil: "- @fernandocavalcanti",
          aula: "Introdução ao mercado",
          description: "Especialista em marketing digital com mais de 10 anos de experiência, Fernando é fundador da Cavalcanti/Digital, onde lidera projetos de social marketing baseados em dados e criatividade. Com pós-graduação em Inovação e Estratégia pela ESPM-SP, já assinou campanhas de impacto para marcas como Microsoft, Warner Bros, Santander e BASF. É reconhecido pelo mercado pelos estudos de caso sobre Grow, Atento e Macbeth, combinando narrativa, design e dados para gerar resultados expressivos, além de ser educador digital para colaboradores de grandes marcas, como Coty, Wella Professionals etc."
        },
      ],
      formData: {
        name: "",
        email: "",
        password: "",
        phone: "",
        perfil: "",
        origin: "aliexperts",
        date_subscription: "",
        specialities: [],
        validacaoRedes: [
          { socialMedia: '', link: '' }
        ]
      },
      passwordStrength: '',
      showingTooltip: false,
      isLoading: false,
      success: '',
      error: '',
      selectedCount: 0,      
      selectedSocialMedia: '',
      socialMediaInput: '',
      showAllFields: true,
      
      vertical: [
        { name: "Beleza", id: 263 },
        { name: "Casa", id: 306 },
        { name: "Decoração", id: 307 },
        { name: "Esporte", id: 305 },
        { name: "Fitness", id: 264 },
        { name: "Games", id: 362 },
        { name: "Moda", id: 323 },
        { name: "Tecnologia", id: 368 },
    ],    
    isBlocked: true, 
    inputCode: '',
    correctCode: '',
    errorMessage: '',
    }
  },

  // mounted() {
  //    const isAuthenticated = localStorage.getItem('isAuthenticated');
  //    if (isAuthenticated) {
  //      this.isBlocked = false;
  //    } else {
  //      fetch('auth.json')
  //        .then(response => response.json())
  //        .then(data => {
  //          this.correctCode = data.code;
  //        })
  //        .catch(error => {
  //          console.error('Erro ao carregar o código:', error);
  //          this.errorMessage = 'Erro ao carregar a configuração de autenticação. Por favor, tente novamente mais tarde.';
  //        });
  //    }
  // },

  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    closeModal() {
      this.showModal = false;
    },
    formatTelefone() {
      this.formData.phone = this.formData.phone.replace(/\D/g, ''); 
      let phoneNumber = this.formData.phone;
    
      if (phoneNumber.length >= 2) {
        this.formData.phone = `(${phoneNumber.substring(0, 2)}`;
      }
    
      if (phoneNumber.length > 2) {
        this.formData.phone += `) ${phoneNumber.substring(2, 7)}`;
      }
    
      if (phoneNumber.length > 7) {
        this.formData.phone += `-${phoneNumber.substring(7, 11)}`;
      }
    },

    verifyCode() {
      if (this.inputCode === this.correctCode) {
        this.isBlocked = false;
        localStorage.setItem('isAuthenticated', true);
      } else {
        this.errorMessage = 'Senha incorreta. Tente novamente.';
      }
    },

    checkPasswordStrength() {
      const password = this.formData.password;
      if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
        this.passwordStrength = 'Forte';
      } else if (password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
        this.passwordStrength = 'Média';
      } else {
        this.passwordStrength = 'Fraca';
      }
    },
    
    showTooltip() {
      this.showingTooltip = true;
    },

    hideTooltip() {
      this.showingTooltip = false;
    },
  
    updateSelectedCount() {
      this.selectedCount = this.formData.specialities.length;
    },

    formLogin() {
      this.error = "";
      this.success = "";
      this.isLoading = true;
    
      fetch('https://creators.llc/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(this.formData),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            this.error = 'Ocorreu um erro no login. Por favor, verifique se o e-mail e senha estão corretos.';
          }
          this.isLoading = false;
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          if(data.data.user && data.data.user.date_subscription == null){
            const now = new Date();
            const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
            this.formData.date_subscription = formattedDate;

            this.formUpdateUser(data.data.access_token, data.data.user.id);
          }else{
            this.isLoading = false;
            this.success = "E-mail já inscrito!";
          }
        }
      })
      .catch(error => {
        this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
        this.isLoading = false;
      });
    },
    
    formUpdateUser(token, id) {
      this.formData.validacaoRedes.forEach(element => {
        this.formData[element.socialMedia] = this.getBaseLink(element.socialMedia) + element.link;
      });
      console.log(this.formData)
      fetch('https://creators.llc/api/v1/users/'+id, {
          method: 'PUT',
          body: JSON.stringify(this.formData),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          }
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro ao atualizar usuário');
          }
          return response.json(); 
      })
      .then(data => {
          if(data.error) {
              this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
              this.isLoading = false;
          } else if(!data.error) {
            this.success = 'Inscrição efetuada com sucesso!';
            this.isLoading = false;

            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
      })
      .catch(error => {
          console.error('Erro na solicitação:', error);
      });
    },

    formForgot(){
      if(this.formData.email == "") {
        this.error = 'Preencha um email válido';
      }else{
        const requestBody = {
          email: this.formData.email
        };

        fetch('https://creators.llc/api/password/create', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
              'Content-Type': 'application/json',
          }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao atualizar usuário');
            }
            return response.json();
        })
        .then(data => {
          if (data.data && data.data.message) {
              const successMessage = data.data.message;
              this.success = successMessage;
          } else {
              throw new Error('Resposta do servidor incompleta ou sem mensagem');
          }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
      }
    },

    formCreateUser() {
      this.error = "";
      this.success = "";

      this.validadeRedes()

      if(this.selectedCount >= 2 && this.validadeRedes()) {
        this.isLoading = true;

        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        this.formData.date_subscription = formattedDate;

        fetch('https://creators.llc/api/v1/users', {
            method: 'POST',
            body: JSON.stringify(this.formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao criar usuário');
            }
            return response.json();
        })
          .then(data => {
            
          if(data.error) {
            if (data.error.email) {
              if (Array.isArray(data.error.email) && data.error.email.length > 0) {
                const errorMessage = data.error.email[0];
                this.error = errorMessage;
              }
            }else{
              this.error = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.';
            }
            this.isLoading = false;
          } else {
            this.formUpdateUser(data.data.access_token, data.data.user.id);
          }
        })
      }else{
        if(this.selectedCount < 1) {
          this.error = 'É necessário selecionar no mínimo 2 verticais do seu conteúdo.';
        }else {
          this.error = 'É necessário selecionar no mínimo 1 rede.';
        }
      }
    },

    validadeRedes() {
      if(Array.isArray(this.formData.validacaoRedes) && this.formData.validacaoRedes.length > 0) {
        const primeiroElemento = this.formData.validacaoRedes[0];
        const socialMediaVazia = primeiroElemento.socialMedia.trim() === '';
        const linkVazio = primeiroElemento.link.trim() === '';
        
        if (socialMediaVazia || linkVazio) {
          return false
          
        } 
      } else {
          return false
      }
      return true
    },

    toggleReturn() {
      this.error = "";
      this.success = "";
    },

    toggleFieldsVisibility() {
      this.error = "";
      this.success = "";
      this.showAllFields = !this.showAllFields;
    },

    addSocialMedia() {
      if (this.formData.validacaoRedes.length < 2) {
        this.formData.validacaoRedes.push({ socialMedia: '', link: '' });
      }
    },

    removeSocialMedia() {
      if (this.formData.validacaoRedes.length > 1) {
        this.formData.validacaoRedes.pop();
      }
    },

    getBaseLink(socialMedia) {
      if (socialMedia === 'instagram') {
        return 'https://www.instagram.com/';
      } else if (socialMedia === 'youtube') {
        return 'https://www.youtube.com/';
      } else if (socialMedia === 'tikTok') {
        return 'https://www.tiktok.com/';
      }
      return '';
    },
  },

  computed: {
    selectedVerticals() {
      const selectedIds = this.formData.specialities.map(Number);
      return this.vertical.filter((v) => selectedIds.includes(v.id));
    },
    isValid() {
      const vertical = this.selectedCount >= 2;
      const redes = this.formData.validacaoRedes.length >= 1;


      return [vertical, redes];
    }
  },

  
}).mount('#app')