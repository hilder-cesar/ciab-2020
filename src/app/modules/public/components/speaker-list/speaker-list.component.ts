import { Component, OnInit, Input, Inject, LOCALE_ID } from '@angular/core';
import { GenericService } from 'src/app/services/generic/generic.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeakerListModalComponent } from './../speaker-list-modal/speaker-list-modal.component';

const SPEAKER_LIST: any[] = [
  {
    photo: '../assets/images/shared/keynote-speakers/candido-bracher.png',
    name: 'Candido Bracher',
    function: 'Presidente-executivo do Itaú Unibanco',
    function_en: 'Chief Executive Officer of Itaú Unibanco',
    miniCV: 'Candido Botelho Bracher foi nomeado presidente-executivo do Itaú Unibanco em maio de 2017. Entre 2015 e 2016, foi diretor geral da divisão de Atacado do Itaú Unibanco e membro do conselho de administração e do comitê executivo da instituição. O executivo foi sócio-fundador do banco corporativo BBA Creditanstalt, uma joint venture criada em 1988. Durante 15 anos, integrou o comitê executivo e foi responsável pela divisão de banco corporativo e tesouraria do BBA Creditanstalt, até a integração com o Itaú, em 2003.',
    miniCVEn: 'Candido Botelho Bracher was appointed executive president of Itaú Unibanco in May 2017. Between 2015 and 2016, he was general director of Itaú Unibanco&apos;s Wholesale division and member of the institution&apos;s board of directors and executive committee. The executive was a founding partner of the corporate bank BBA Creditanstalt, a joint venture created in 1988. For 15 years, he served on the executive committee and was responsible for the corporate bank and treasury division of BBA Creditanstalt, until the integration with Itaú in 2003.'
  },
  {
    photo: '../assets/images/shared/keynote-speakers/martin-wolf.jpg',
    name: 'Martin Wolf',
    function: 'Editor e colunista-chefe de economia do Jornal Financial Times. Entre suas publicações recentes estão: “Why globalisation Works” and “Fixing global finance”.',
    function_en: 'Editor and chief economics columnist for the Financial Times newspaper. Recent content include: “Why globalization Works” and “Fixing global finance”.',
    miniCV: 'A perspectiva e as experiências únicas de Martin Wolf lhe dão uma voz incomparável nas economias européia e global. Editor e colunista-chefe de economia do Jornal Financial Times em Londres, Martin traz uma experiência prática considerável para seus escritos. Anteriormente, foi economista sênior por dez anos na divisão de comércio internacional do Banco Mundial. É membro do Fórum Econômico Mundial em Davos desde 1999, onde atua como moderador e é membro do Conselho Internacional de Mídia. Foi diretor de estudos do Trade Policy Research Centre em Londres e assessorou governos e organizações internacionais sobre comércio e integração econômica. Wolf é autor de livros conceituados sobre globalização, entre suas publicações recentes estão: “Why globalisation Works”, “Fixing global finance” e “The Shifts and the Shocks: O que aprendemos e ainda precisamos aprender - da crise financeira”. Martin ganhou vários prêmios de prestígio por seu jornalismo, incluindo o prêmio do Overseas Press Club of America por “melhor comentário sobre notícias internacionais em qualquer meio”, o James Cameron Memorial Award, uma bolsa honorária da Academia Internacional de Negócios Internacionais e o Prêmio Internacional de Jornalismo Ischia. Martin tem uma reputação merecida por seu pensamento rigoroso, discernimento profundo e sua entrega incisiva e espirituosa.',
    miniCVEn: 'Martin Wolf&apos;s unique perspective and experiences give him a voice unmatched in European and global economies. Editor and chief economics columnist for the Financial Times in London, Martin brings considerable practical experience to his writings. Previously, he was a senior economist for ten years in the World Bank&apos;s international trade division. He has been a member of the World Economic Forum in Davos since 1999, where he serves as a moderator and is a member of the International Media Council. He was director of studies at the Trade Policy Research Center in London and advised governments and international organizations on trade and economic integration. Wolf is the author of renowned books on globalization, among his recent content are: “Why globalization Works”, “Fixing global finance” and “The Shifts and the Shocks: What we have learned and still need to learn - from the financial crisis.” Martin won several prestigious awards for his journalism, including the Overseas Press Club of America award for “best commentary on international news in any medium”, the James Cameron Memorial Award, an honorary fellowship from the International Academy of International Business and the Ischia International Journalism Award Martin has a reputation deserved for his rigorous thinking, profound insight and his incisive and witty surrender.'
  },
  {
    photo: '../assets/images/shared/keynote-speakers/octavio-de-lazari-junior.jpg',
    name: 'Octavio de Lazari Junior',
    function: 'Diretor-Presidente no Banco Bradesco',
    function_en: 'Chief Executive Officer at Banco Bradesco',
    miniCV: 'Iniciou a carreira no Banco Bradesco S.A. em 1978. Foi eleito Diretor Executivo Adjunto em 2012, Diretor Executivo Gerente em 2015 e Diretor Vice-Presidente Executivo em 2017. Em março de 2018, foi eleito Diretor-Presidente, cargo que ocupa atualmente.',
    miniCVEn: 'He started his career at Banco Bradesco S.A. in 1978. He was elected Deputy Executive Director in 2012, Managing Executive Director in 2015 and Executive Vice President in 2017. In March 2018, he was elected Chief Executive Officer, a position he currently holds.'
  },
  {
    photo: '../assets/images/shared/keynote-speakers/roberto-sallouti.png',
    name: 'Roberto Sallouti',
    function: 'Roberto Sallouti é CEO e membro do Conselho de Administração do Banco BTG Pactual.',
    function_en: 'Roberto Sallouti is CEO and member of the Board of Directors of Banco BTG Pactual.',
    miniCV: 'Roberto Sallouti é CEO e membro do Conselho de Administração do Banco BTG Pactual. Ingressou no Banco em 1994 e tornou-se sócio em 1998. Foi nomeado COO (Chief Operating Officer) em 2008, sendo responsável anteriormente pelas áreas de renda fixa local e internacional. Foi nomeado CEO do banco em 2015. Sallouti é bacharel em Economia, com especialização em finanças e marketing pela Wharton School - University of Pennsylvania.',
    miniCVEn: 'Roberto Sallouti is CEO and member of the Board of Directors of Banco BTG Pactual. He joined the Bank in 1994 and became a partner in 1998. He was appointed COO (Chief Operating Officer) in 2008, having previously been responsible for the local and international fixed income areas. He was appointed CEO of the bank in 2015. Sallouti holds a bachelor&apos;s degree in economics, specializing in finance and marketing from the Wharton School - University of Pennsylvania.'
  }
];

enum SpeakerListMode {
  Static = 0,
  Dynamic = 1
}

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.sass']
})
export class SpeakerListComponent implements OnInit {

  speakerList: any[];

  @Input()
  speakerListMode: SpeakerListMode;

  @Input()
  speakerListLength?: number;

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private genericService: GenericService,
    private ngbModal: NgbModal
  ) { }

  private mapSpeakers(speakerList: any): any[] {
    if (this.localeId === 'en') {
      speakerList = speakerList.map((item) => {
        item.function = item.function_en;
        item.miniCV = item.miniCVEn;
        return item;
      });
    }
    return speakerList;
  }

  private mapSpeakersDynamic(speakerList: any): any[] {
    speakerList = this.mapSpeakers(speakerList);
    speakerList = speakerList.map((item) => {
      item.photo = 'https://img.febraban.org.br/Palestrantes/' + item.profilePicture_small;
      return item;
    });
    return speakerList;
  }

  ngOnInit(): void {
    if (this.speakerListMode === SpeakerListMode.Static) {
      const length = this.speakerListLength ? this.speakerListLength : SPEAKER_LIST.length;
      this.speakerList = this.mapSpeakers([...SPEAKER_LIST].splice(0, length));
    } else if (this.speakerListMode === SpeakerListMode.Dynamic) {
      const length = this.speakerListLength ? `?limit=${this.speakerListLength}` : '';
      this.genericService.get(`Events/GetAllKeyNoteSpeakers${length}`)
        .subscribe((response: any) => {
          this.speakerList = this.mapSpeakersDynamic(response.data);
        });
    }
  }

  openSpeakerListModal(index: number): void {
    const modalRef = this.ngbModal.open(SpeakerListModalComponent, {
      size: 'xl',
      centered: true
    });
    modalRef.componentInstance.speakerList = this.speakerList;
    modalRef.componentInstance.speakerSelected = index;
  }

}
